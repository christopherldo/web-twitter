interface ButtonProps {
  label: string;
  onClick?: () => void;
  size: 'small' | 'medium' | 'large';
}

export const Button = ({label, onClick, size}: ButtonProps) => {
  return <div 
    onClick={onClick} 
    className={
      `flex justify-center items-center cursor-pointer bg-white text-black font-bold rounded-3xl
      ${size === 'large' && 'h-14 text-lg'}
      ${size === 'medium' && 'h-10 text-md'}
      ${size === 'small' && 'h-7 text-xs'}
      `}
    >
    {label}
  </div>;
}
