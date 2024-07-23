import React from "react";

const SecurityLockIcon: React.FC<{color?: string}> = ({color}) => {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0.25L0.75 5.25V12.75C0.75 19.6875 5.55 26.175 12 27.75C18.45 26.175 23.25 19.6875 23.25 12.75V5.25L12 0.25ZM12 7.75C13.75 7.75 15.5 9.125 15.5 10.875V12.75C16.25 12.75 17 13.5 17 14.375V18.75C17 19.5 16.25 20.25 15.375 20.25H8.5C7.75 20.25 7 19.5 7 18.625V14.25C7 13.5 7.75 12.75 8.5 12.75V10.875C8.5 9.125 10.25 7.75 12 7.75ZM12 9.25C11 9.25 10.125 9.875 10.125 10.875V12.75H13.875V10.875C13.875 9.875 13 9.25 12 9.25Z"
        fill={color ? color :"#131313"}
      />
    </svg>
  );
};

export default SecurityLockIcon;
