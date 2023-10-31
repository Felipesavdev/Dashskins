import './styles.scss'

const Selects = () => {
  return (
    <div className='container-selects'>
      <div className='selects'>
        <select name="Escopeta" id="escopeta">
          <option value="opcao1">Escopeta</option>
        </select>
        <select name="Faca" id="faca">
          <option value="opcao1">Faca</option>
        </select>
        <select name="Luvas" id="luvas">
          <option value="opcao1">Luvas</option>
        </select>
        <select name="Metralhadora" id="metralhadora">
          <option value="opcao1">Metralhadora</option>          
        </select>
        <select name="Pistola" id="pistola">
          <option value="opcao1">Pistola</option>
        </select>
        <select name="Rifle" id="rifle">
          <option value="opcao1">Rifle</option>
        </select>
        <select name="Rifle de Precisão" id="rifle-precisao">
          <option value="opcao1">Rifle de Precisão</option>
        </select>
        <select name="Submetralhadora" id="submetralhadora">
          <option value="opcao1">Submetralhadora</option>
        </select>
      </div>
    </div>
  )
};

export default Selects