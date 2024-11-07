import { Container, Flex } from "@radix-ui/themes"

type ItemProps = any;

export type CardItemListProps = {
    itemPropsList: ItemProps[];
    renderItem: (id: string, item: ItemProps) => JSX.Element;
}

const CardItemList = (props: CardItemListProps) => {
    
    const { itemPropsList, renderItem } = props;

    return (<Flex direction="column" justify="center" align="center">
                    {itemPropsList.map((props, idx)=>(renderItem(idx.toString(), props)))}
            </Flex>)
}

export default CardItemList;