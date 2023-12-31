import { useEffect, useState } from 'react';
import flagConnector from './connectors/flagConnector';
import './app.css';

// The README has a description.

function App() {
  // Loading state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [content, setContent] = useState<string[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);

  // Get Flag
  const getFlag = async (): Promise<void> => {
    const resp: string | undefined = await flagConnector.getFlag();
    if (!resp) {
      setError('No content came back.');
      setIsLoading(false);
      return;
    }
    setError('');
    setIsLoading(false);
    await showContent(resp);
  }

  const showContent = async (value: string): Promise<void> => {
    const charArray: string[] = value.split('');
    for (const char of charArray) {
      await new Promise((resolve: (value: void | PromiseLike<void>) => void) => {
        setTimeout(() => {
          setContent((content: string[]) => [...content, char]);
          resolve();
        }, 500);
      });
    }
    setIsDone(true);
  }

  // Mount
  useEffect(() => {
    getFlag();
  }, []);

  return (
    <>
      {isDone &&
        <p className='flag-animation'>🤘</p>
      }
      {
        isLoading ?
          <p>Loading</p>
          :
          error ?
            <p>{error}</p>
            :
            <ul>
              {content.map((item: string, idx: number) => <li key={item + idx}>{item}</li>)}
            </ul>
      }
    </>
  )
}

export default App
