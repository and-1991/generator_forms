import React, { useState, useCallback } from 'react';
import { CONFIG, RESULT, ACTIVE } from './utils';
import { Main, Wrapper, Tabs, Tab, WrapperPages } from './style';
import Config from './containers/Config';
import Result from './containers/Result';

const App = () => {
  const [pageState, setPageState] = useState(CONFIG);
  const [formConfig, setFormConfig] = useState('');

  const switchPage = useCallback((page) =>{
    setPageState(page)
    if(page === CONFIG) {
      setFormConfig('')
    }
  }, [])

  const handleChange = (value) => {
    if(typeof(value) === 'object') {
      const jsonValue = JSON.stringify(value);
      setFormConfig(jsonValue)
    }
  }

  return (
    <Main>
      <Wrapper>
        <Tabs>
          <Tab
              onClick={() => switchPage(CONFIG)}
              active={pageState === CONFIG && ACTIVE}
          >
            {CONFIG}
          </Tab>
          <Tab
              onClick={() => switchPage(RESULT)}
              active={pageState === RESULT && ACTIVE}
          >
            {RESULT}
          </Tab>
        </Tabs>
        <WrapperPages>
          {pageState === CONFIG && <Config formConfig={formConfig} handleChange={handleChange}/>}
          {pageState === RESULT && <Result formConfig={formConfig}/>}
        </WrapperPages>
      </Wrapper>
    </Main>
  );
};

export default App;
