/* eslint-disable no-undef */
// src/utils/currency.test.js
import UserTemplateComponent from './UserTemplateComponent';

const user = {
  name: 'Caio Oliveira',
  email: 'colive.dev@gmail.com',
  cpf: '420.739.308-08',
  phone: '(11) 96913-2927',
};

describe('UserTemplateComponent', () => {
  it('Snapshot', async () => {
    const ComponentMock = `
<tr class="__user">
  <td tabindex="1">${user.name}</td>
  <td tabindex="2">${user.email}</td>
  <td tabindex="3">${user.cpf}</td>
  <td tabindex="4">${user.phone}</td>
  <td class="icon-remove">${' '}<img data-id="${user.email}" tabindex="5" src="images/content/remove.svg"  alt="imagem da letra X de cor branca com fundo vermelho. clique para deletar o usuário."/></td>
</tr>
`;

    const Component = UserTemplateComponent(user);

    expect(Component).toEqual(ComponentMock);
  });
});
