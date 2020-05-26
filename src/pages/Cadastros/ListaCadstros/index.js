import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {Text} from 'react-native';

import Header from '../../../components/_layout/Topbar';

// import { Container } from './styles';

const ListaCadstros = ({navigation}) => {
  const [tableHead, setTableHead] = useState(['Nome', 'Sexo', 'Data', '']);
  const [tableData, setTableData] = useState([
    ['André', 'M', '00/00/000', ''],
    ['Fellipe', 'M', '00/00/000', ''],
    ['Christian', 'M', '00/00/000', ''],
  ]);

  return (
    <>
      <Header titulo="Cadastros" />
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});

export default ListaCadstros;
