import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856D6',
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  buttonBig: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonBigText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuText: {
    fontSize: 20
  },
  menuButton: {
    marginVertical: 5,
  },
});
