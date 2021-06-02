const UserTemplateComponent = ({
  name, email, cpf, phone,
}) => `
<tr class="__user">
  <td tabindex="1">${name}</td>
  <td tabindex="2">${email}</td>
  <td tabindex="3">${cpf}</td>
  <td tabindex="4">${phone}</td>
  <td class="icon-remove"><img data-id="${email}" tabindex="5" src="images/content/remove.svg"  alt="imagem da letra X de cor branca com fundo vermelho. clique para deletar o usuário."/></td>
</tr>
`;

export default UserTemplateComponent;
