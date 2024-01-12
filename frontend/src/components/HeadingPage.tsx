const HeadingPage = () => {
  return (
    <form action="heading">
      <label htmlFor="name">Your Name: </label>
      <input type="text" />
      <label htmlFor="email">Email: </label>
      <input type="text" />
      <label htmlFor="number">Phone Number: </label>
      <input type="number" />
      <label htmlFor="linkedin">Your LinkedIn: </label>
      <input type="text" />
    </form>
  );
};

export default HeadingPage;
