import { Meta, StoryObj } from '@storybook/react';
import { Theme, Container } from '@radix-ui/themes';
import StickyButton, {StickyButtonProps} from './StickyButton';
const meta: Meta<typeof StickyButton> = {
    title: 'Components/StickyButton',
    component: StickyButton,
    decorators: [
        (Story) => (
            <Theme>
                <Story />
            </Theme>
        ),
    ],
    argTypes: {
      viewerType: {control: Number},
      innerText: {control: String},
    },
  };
  
  export default meta;

  type Story = StoryObj<StickyButtonProps>;
  
  export const Default: Story = {
    args: {
      viewerType: 0,
      innerText: "",
    },
  };
  
  export const StudentViewer: Story = {
    args: {
      viewerType: 1,
      innerText: "신청하기",
    },
  };

  export const CorpViewer: Story = {
    args: {
      viewerType: 2,
      innerText: "Search Student",
    },
  };

  export const WithScroll: Story = {
    decorators: [
      (Story) => (
        <Container>
          <Container height="1200px">
            This is reqeust page content of 1200px height
          </Container>
          <Story />
        </Container>
      ),
    ],
    args: {
      viewerType: 2,
      innerText: "학생 찾기"
    }
  }
