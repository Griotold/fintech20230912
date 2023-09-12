const Welcome = ({ username, major, age }) => {
  console.log(username, major, age);
  return (
    <>
      <p>
        {username}님 {major} 전공이시고 {age}세시네요! 안녕하세요!
      </p>
    </>
  );
};

export default Welcome;
