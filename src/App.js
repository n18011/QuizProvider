import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { StateProvider } from './context/State'
import ThemeProvider from './context/Theme'
import Test from './components/Test'


export default () => {
  // reducerの設定
  // firebaseの接続設定
  // firestoreの接続確認
  // TODO:context of reducerの設定
  // TODO:themeの設定

  // localforageの接続設定
  // TODO:context of localforageの設定(いらない)

  // TODO:routingの設定
  // TODO:HeaderTemplate componentの作成

  //TODO:contentの作成
  //TODO:main contentの作成
  //TODO:component(main)の作成
  //TODO:sub content(ranking)の作成
  //TODO:ranking用のfirestoreの作成
  //TODO:component(sub)の作成

  //TODO:seajのdata整形
  //TODO:seajのdataをfirestoreへ

  return (
    <StateProvider>
      <ThemeProvider>
        <Test />
      </ThemeProvider>
    </StateProvider>
  );
}

