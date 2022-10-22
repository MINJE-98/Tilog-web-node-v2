import ButtonProps from "@Commons/atom/button/index.interface";
import StyledButton from "@Commons/atom/button/index.styled";

const Button = ({ size, color, children, ...props }: ButtonProps) => {
  return (
    <StyledButton size={size} color={color} {...props}>
      {children}
    </StyledButton>
  );
};
export default Button;
