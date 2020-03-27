import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00001a',
    paddingHorizontal: 24,
    paddingTop:  Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }, 

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#000033',
    marginBottom: 16,
    marginTop: 48,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#777',
    fontWeight: 'bold',
    marginTop: 24,
  },

  incidentValue: {
    fontSize: 15,
    color: '#eee',
    marginTop: 8,
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#000033',
    marginBottom: 16,
  },

  heroTitle: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    lineHeight: 30,
  }, 

  heroDescription: {
    fontSize: 15,
    color: '#eee',
    marginTop: 16,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  }

});