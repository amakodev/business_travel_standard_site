import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const welcomeMessage = `
Welcome to Restro Travel, your gateway to the breathtaking beauty of South Africa! 
I'm your virtual travel buddy, and I'm super excited to help you discover the magic of Cape Town and beyond!

Our team has handcrafted amazing packages that showcase the best landscapes, wildlife, and cultural experiences South Africa has to offer.
From luxurious safaris where you can meet the Big Five, to stunning coastal drives along the Garden Route, 
and wine-tasting adventures in Cape Winelands - we've got it all!

Feel free to explore our site, check out our special deals, and don't forget about our travel insurance options for peace of mind.
If you have any questions, our friendly team is just a click away.

Let's make your South African adventure unforgettable! Enjoy browsing our site!
`;

const VoiceIntroduction: React.FC = () => {
  const [hasPlayed, setHasPlayed] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [autoplayFailed, setAutoplayFailed] = useState<boolean>(false);
  const [autoplayAttempts, setAutoplayAttempts] = useState<number>(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Function to get available voices
  const updateVoices = () => {
    if ('speechSynthesis' in window) {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    // Check if text-to-speech has already played in this session
    const hasIntroPlayed = sessionStorage.getItem('introPlayed');
    
    // Initialize speech synthesis and get available voices
    if ('speechSynthesis' in window) {
      // Get the voices now (if already loaded)
      const voicesLoaded = updateVoices();
      
      // Set up event for when voices change or become available
      window.speechSynthesis.onvoiceschanged = () => {
        const voicesUpdated = updateVoices();
        
        // If voices are now available and we haven't played yet, try to play
        if (voicesUpdated && !hasIntroPlayed && !isSpeaking && autoplayAttempts < 3) {
          attemptAutoplay();
        }
      };
      
      // Try to play automatically after page loads
      if (!hasIntroPlayed) {
        // First attempt after a short delay
        autoplayTimerRef.current = setTimeout(() => {
          attemptAutoplay();
        }, 1500);
      } else {
        setHasPlayed(true);
      }
    }
    
    // Cleanup
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, []);
  
  // Effect to handle multiple autoplay attempts
  useEffect(() => {
    if (autoplayAttempts > 0 && autoplayAttempts < 3 && !isSpeaking && !hasPlayed) {
      // If previous attempt failed, try again after a delay
      autoplayTimerRef.current = setTimeout(() => {
        playIntroduction();
      }, 2000);
    } else if (autoplayAttempts >= 3 && !isSpeaking && !hasPlayed) {
      // Mark as failed after multiple attempts
      setAutoplayFailed(true);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, [autoplayAttempts, isSpeaking, hasPlayed]);
  
  const attemptAutoplay = () => {
    // Attempt to play and increment the attempt counter
    playIntroduction();
    setAutoplayAttempts(prev => prev + 1);
  };
  
  const getBestVoice = (): SpeechSynthesisVoice | null => {
    if (voices.length === 0) return null;
    
    // Try to find a friendly, preferably female English voice
    // Priorities: 1. South African English 2. UK/AU/NZ English 3. US English 4. Any English 5. Default
    
    // Look for South African English
    const saVoice = voices.find(voice => 
      voice.lang.includes('en-ZA') || 
      voice.name.includes('South African')
    );
    if (saVoice) return saVoice;
    
    // Look for UK/AU/NZ English female voices
    const ukVoice = voices.find(voice => 
      (voice.lang.includes('en-GB') || voice.lang.includes('en-AU') || voice.lang.includes('en-NZ')) && 
      (voice.name.toLowerCase().includes('female') || voice.name.includes('Samantha'))
    );
    if (ukVoice) return ukVoice;
    
    // Look for US English female voices
    const usVoice = voices.find(voice => 
      voice.lang.includes('en-US') && 
      (voice.name.toLowerCase().includes('female') || voice.name.includes('Samantha'))
    );
    if (usVoice) return usVoice;
    
    // Any English voice
    const anyEnglishVoice = voices.find(voice => voice.lang.startsWith('en'));
    if (anyEnglishVoice) return anyEnglishVoice;
    
    // Default to first voice if no English voice is found
    return voices[0];
  };
  
  const playIntroduction = () => {
    if ('speechSynthesis' in window) {
      try {
        // Stop any current speech
        window.speechSynthesis.cancel();
        
        const speech = new SpeechSynthesisUtterance(welcomeMessage);
        
        // Configure voice properties
        speech.rate = 0.9; // Slightly slower than default for clarity
        speech.pitch = 1.1; // Slightly higher pitch for friendliness
        speech.volume = 0.9;
        
        // Try to get a suitable voice
        const bestVoice = getBestVoice();
        if (bestVoice) {
          speech.voice = bestVoice;
        }
        
        // Add event listeners
        speech.onstart = () => {
          setIsSpeaking(true);
          setAutoplayFailed(false);
          sessionStorage.setItem('introPlayed', 'true');
          setHasPlayed(true);
        };
        
        speech.onend = () => setIsSpeaking(false);
        speech.onpause = () => setIsPaused(true);
        speech.onresume = () => setIsPaused(false);
        speech.onerror = () => {
          setIsSpeaking(false);
          // If this was an autoplay attempt, mark as failed after the last attempt
          if (autoplayAttempts >= 2) {
            setAutoplayFailed(true);
          }
        };
        
        // Start speaking
        window.speechSynthesis.speak(speech);
      } catch (error) {
        console.error("Speech synthesis error:", error);
        setAutoplayFailed(true);
      }
    } else {
      // Browser doesn't support speech synthesis
      setAutoplayFailed(true);
    }
  };
  
  const pauseResumeIntroduction = () => {
    if ('speechSynthesis' in window) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    }
  };
  
  const stopIntroduction = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };
  
  const restartIntroduction = () => {
    setAutoplayFailed(false);
    playIntroduction();
  };
  
  // If browser doesn't support speech synthesis or intro has played and is not speaking, don't render controls
  if (!('speechSynthesis' in window) || (!isSpeaking && hasPlayed && !autoplayFailed)) {
    return null;
  }
  
  return (
    <IntroductionContainer>
      {autoplayFailed ? (
        <>
          <IntroTitle>Didn't hear our welcome?</IntroTitle>
          <AutoplayMessage>
            Some browsers require user interaction before playing audio. 
            Click the button below to hear our friendly introduction!
          </AutoplayMessage>
          <ControlsWrapper>
            <PlayAgainButton onClick={restartIntroduction}>
              <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </Icon>
              Play Welcome Message
            </PlayAgainButton>
          </ControlsWrapper>
        </>
      ) : (
        <>
          <IntroTitle>Welcome to Restro Travel!</IntroTitle>
          <ControlsWrapper>
            {!isSpeaking && !hasPlayed ? (
              <ControlButton onClick={playIntroduction}>
                <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </Icon>
                Play Introduction
              </ControlButton>
            ) : (
              <>
                <ControlButton onClick={pauseResumeIntroduction}>
                  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {isPaused ? (
                      <path d="M8 5v14l11-7z" />
                    ) : (
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    )}
                  </Icon>
                  {isPaused ? 'Resume' : 'Pause'}
                </ControlButton>
                <ControlButton onClick={stopIntroduction}>
                  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M6 6h12v12H6z" />
                  </Icon>
                  Stop
                </ControlButton>
              </>
            )}
          </ControlsWrapper>
        </>
      )}
      <CloseButton onClick={() => {
        stopIntroduction();
        setAutoplayFailed(false);
        setHasPlayed(true);
      }}>
        <CloseIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </CloseIcon>
      </CloseButton>
    </IntroductionContainer>
  );
};

const IntroductionContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  z-index: ${({ theme }) => theme.zIndex.fixed};
  max-width: 300px;
  animation: fadeIn 0.5s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const IntroTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const AutoplayMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.4;
`;

const ControlsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  cursor: pointer;
  font-weight: 600;
  transition: ${({ theme }) => theme.transition.normal};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.offWhite};
  }
`;

const PlayAgainButton = styled(ControlButton)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: ${({ theme }) => theme.colors.accent1};
  color: ${({ theme }) => theme.colors.black};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Icon = styled.svg`
  width: 18px;
  height: 18px;
  fill: currentColor;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  opacity: 0.7;
  padding: 4px;
  
  &:hover {
    opacity: 1;
  }
`;

const CloseIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: currentColor;
`;

export default VoiceIntroduction; 