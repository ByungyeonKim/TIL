import { useRef, useState } from 'react';

export function FetchingWithCancel() {
  const [users, setUsers] = useState();
  const [fetchStatus, setFetchStatus] = useState('idle');
  const controllerRef = useRef();

  const getUsers = async () => {
    setFetchStatus('loading');
    controllerRef.current = new AbortController();

    const timeout = setTimeout(() => {
      setFetchStatus('delayed');
    }, 2000);

    try {
      const response = await fetch('http://localhost:3000/users', {
        signal: controllerRef.current.signal,
      });
      const json = await response.json();

      setUsers(json);
      setFetchStatus('success');
    } catch (e) {
      if (e.name === 'AbortError') {
        setFetchStatus('canceled');
      } else {
        setFetchStatus('error');
      }
    } finally {
      clearTimeout(timeout);
    }
  };

  return (
    <>
      <button
        onClick={getUsers}
        disabled={fetchStatus === 'loading' || fetchStatus === 'delayed'}
        type='button'
      >
        사용자 불러오기
      </button>
      {fetchStatus === 'success' && <pre>{JSON.stringify(users, null, 2)}</pre>}
      {fetchStatus === 'delayed' && (
        <>
          <p>
            응답이 평소보다 느린 것 같습니다. 데이터를 불러오는 데에 다소 시간이
            걸릴 수 있습니다.
            <br />
            계속 기다리시거나, 취소할 수 있습니다.
          </p>
          <button
            onClick={() => controllerRef.current.abort()}
            className='cancel'
            type='button'
          >
            취소
          </button>
        </>
      )}
      {fetchStatus === 'canceled' && <p>취소됨</p>}
      {fetchStatus === 'error' && <p>에러 발생!</p>}
    </>
  );
}
