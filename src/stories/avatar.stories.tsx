// [build] library: 'shadcn'
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const meta = {
  title: "ui/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

export const Base = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://drive.google.com/file/d/1Pd8aZP1tWTGoC9Hpot-EKXhq5cO2gM_o/view?usp=sharing" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  args: {},
};
