import { UserList } from 'phosphor-react';
import { CheckboxItem, Content, Group, IconButton, Item, ItemIndicator, Label, MenuContainer, MyDropdownMenu, Portal, RadioGroup, RadioItem, Trigger } from './styles';

export default () => (
  <MenuContainer>

  <MyDropdownMenu>
    <Trigger asChild>
      <IconButton>
        <UserList className='menu' weight="duotone" size={32}/>
      </IconButton>
    </Trigger>

    <Portal>
      <Content sideOffset={5}>

        <Label>Links</Label>

        <Group >
          <a href='#hall'  className='link-a'>
            <Item onSelect={(e) => e.preventDefault()}>
              Esse sou eu
            </Item>
          </a>
          <a href='#projects' className='link-a'>
            <Item onSelect={(e) => e.preventDefault()}>
              Projects
            </Item>
          </a>
          <a href='#code' className='link-a'>
            <Item onSelect={(e) => e.preventDefault()}>
              My Code
            </Item>
          </a>
          <a href='#code' className='link-a'>
            <Item onSelect={(e) => e.preventDefault()}>
              Como posso ajudar?
            </Item>
          </a>
          <a href="Diogo_Martini_resume.pdf" target="_blank" download className='link-a resume'>
            <Item onSelect={(e) => e.preventDefault()}>
              CURRÍCULO
            </Item>
          </a>
        </Group>


        <CheckboxItem>
          <ItemIndicator />

        </CheckboxItem>

        <RadioGroup>
          <RadioItem value='opa1111111111111111111111111111111'>

            <ItemIndicator />

          </RadioItem>
        </RadioGroup>
      </Content>
    </Portal>
  </MyDropdownMenu>
  </MenuContainer>

);