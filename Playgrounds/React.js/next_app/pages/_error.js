function Error({ statusCode }) {
  return (
    <p
      style={{ paddingBlock: '15rem', textAlign: 'center', fontSize: '1.5rem' }}
    >
      {statusCode
        ? `${statusCode} : 서버에서 발생한 에러입니다.`
        : '클라이언트에서 발생한 에러입니다.'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
