export const Hello = ({ navbarContent, numericNav }) => {
  return (
    <>
      <button>{navbarContent}</button>
      <button>{numericNav}</button>
    </>
  );
};

Hello.defaultProps = {
  navbarContent: "DefaultNav",
};
