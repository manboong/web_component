import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@radix-ui/themes';
import CardItemList, { CardItemListProps } from './CardItemList';
import RequestCard, { RequestCardProps }  from '../components/RequestCard';
import StudentCard, { StudentCardProps }  from '../components/StudentCard';
import ReviewOfStudent from '../components/ReviewOfStudent';
import ReviewOfCorp from '../components/ReviewOfCorp';

const meta: Meta<typeof CardItemList> = {
  title: 'Render/CardItemList',
  component: CardItemList,
  decorators: [
    (Story)=>(
        <Theme>
            <Story/>
        </Theme>
    )
  ],
  argTypes: {
    itemPropsList: { control: "object" },
    renderItem: { type: "function" },
  },
};

export default meta;

type Story = StoryObj<CardItemListProps>;

const studentCard = {name:"Kang" ,
                        nationality:"kr",
                        school:"Tokyo",
                        major:"CS",
                        languageWithLevel:[{language: 'Korean', level: 1}, {language: 'English', level: 2}],
                        imageUrl:'#'}


const studentCardRender = (id: string, studentCardProp: StudentCardProps) => {
    return (
        <StudentCard {...studentCardProp}/>
    )
}
export const Default: Story = {
  args: {
    itemPropsList: [studentCard, studentCard, studentCard, studentCard],
    renderItem: studentCardRender,
  },
};


const reqeustCardProps = {title: 'JLPT 監督官',
subtitle: '副監督官',
salary: '150000ウォン',
location: 'ソウル',
date: '2024-10-25',
imageURL: 'image2'}

const requestCardRender = (id: string, requestCardProps: RequestCardProps) => {
    return (
        <RequestCard {...requestCardProps}/>
    )
}

export const RequestCardList: Story = {
    args: {
        itemPropsList: [reqeustCardProps, reqeustCardProps, reqeustCardProps],
        renderItem: requestCardRender,
    }
}