import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 20,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nome: {
    flex: 1,
    fontSize: 20,
  },
  leiaMais: {
    fontSize: 16,
    color: 'green',
  },
  foto: {
    height: 200,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 5,
  },
});

export { styles };
