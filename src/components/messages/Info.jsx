/* eslint-disable react/prop-types */
const Info = ({text, status}) => {
  return (
    <div>
        {/* IIFE */}
      {(function () {
        switch (status) {
          case "info":
            return text;
          case "warning":
            return text;
          case "error":
            return text;
          default:
            return <h1>No status found here....</h1>;
        }
      })()}
    </div>
  );
};

export default Info;
