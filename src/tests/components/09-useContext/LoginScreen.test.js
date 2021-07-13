import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el componente LoginScreen', () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe ejecutar el setUset con el argumento esperado', () => {
    wrapper.find('button').prop('onClick')();
    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      nombre: 'Axel',
    });
  });
});
