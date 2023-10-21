import CircleCountDown from './CircleCountDown/CircleCountDown';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
        <CircleCountDown
          timeInSecond={65}
          size={200}
          strokeBgColor="black"
          strokeColor="lightcoral"
          strokeWidth={4}
          tipWidth={20}
        >
          {elem => {
            console.log(elem);
            return <div>{-elem.angleRotation}</div>;
          }}
        </CircleCountDown>
      </div>
    </>
  );
};
