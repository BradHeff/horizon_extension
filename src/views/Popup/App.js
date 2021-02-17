import React from 'react'
import './App.css'
import Layout from './HOC/Layout';
import Panel from './components/Panel/Panel';
import PanelLinks from './components/Panel_Links/PLinks';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Panel />
        <PanelLinks />
      </Layout>
    );
  }
}

export default App
