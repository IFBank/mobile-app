import React, { useState, useCallback, useContext } from "react";

import { Modal, Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import { ThemeContext } from "../../themes";
import useCacheContext from "../../hooks/useCacheContext";

import {
  Container,
  ModalContainer,
  CloseIcon,
  ItemContainer,
  ItemImage,
  ItemText,
  QuantContainer,
  QuantiText,
  QuantButtonsContainer,
  QuantiButtonPlus,
  QuantuNumberText,
  QuantiButtonMinus,
  Button,
} from "./styles";

const ModalItemQuant: React.FC = ({
  onRequestClose,
  modalVisible,
  selectItem,
}) => {
  if (selectItem == null) return null;

  const { item: itemData } = selectItem;

  const { state: itemsShop, setCacheState: setItemsShop } =
    useCacheContext("items_shop");
  const [value, setValue] = useState(0);

  const theme = useContext(ThemeContext);

  const updateItemsShop = useCallback(() => {
    const newItem = {
      ...itemData,
      ["item_id"]: selectItem.item_id,
      ["amount"]: value,
    };

    // Limpa a setagem do item que tava armazenada
    // Tira da lista se o item_id no cache é o mesmo do que esta sendo setado, se não, deixa.
    const newValue = itemsShop.filter(
      ({ item_id }) => selectItem.item_id != item_id
    );

    // Se o valor for diferente de zero, ele adiciona ao carrinho
    // Se não, ele seta no carrinha sem o item.
    if (value != 0) newValue.push(newItem);

    setItemsShop(newValue);
  }, [value]);

  const updateLessQuant = useCallback(() => {
    if (value != 0) {
      setValue(value - 1);
    }
  }, [value]);

  const updateMoreQuant = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  // TODO: Linear bg

  const onRequestCloseInner = useCallback(() => {
    updateItemsShop();

    onRequestClose();
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onRequestCloseInner}
    >
      <Container>
        <ModalContainer>
          <CloseIcon>
            <Icon
              onPress={onRequestCloseInner}
              name="close"
              size={20}
              color="#000"
            />
          </CloseIcon>

          <ItemContainer>
            <ItemImage />
            <ItemText textColor={theme.linear.primary[0]}>
              {selectItem.item.name}
            </ItemText>
          </ItemContainer>

          <QuantContainer>
            <QuantiText>Quantidade:</QuantiText>

            <QuantButtonsContainer>
              <QuantiButtonMinus
                bgColor={theme.linear.semantic_red[0]}
                onPress={updateLessQuant}
              >
                <Icon name="remove" size={20} color="#fff" />
              </QuantiButtonMinus>

              <QuantuNumberText>{value}</QuantuNumberText>

              <QuantiButtonPlus
                bgColor={theme.linear.primary[0]}
                onPress={updateMoreQuant}
              >
                <Icon name="add" size={20} color="#fff" />
              </QuantiButtonPlus>
            </QuantButtonsContainer>
          </QuantContainer>

          <Button
            text="Adicionar"
            textFontSize={14}
            innerStyle={{
              paddingVertical: 6,
              paddingHorizontal: 18,
            }}
            onPress={onRequestCloseInner}
          />
        </ModalContainer>
      </Container>
    </Modal>
  );
};

export default ModalItemQuant;
