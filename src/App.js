import React from 'react';

import {
  Button,
  Spin,
  Pagination
} from 'antd'

function App() {
  return (
    <div className="App">
      <Button loading type = 'primary'>测试</Button>
      <Spin>
        <Button>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi minus, neque quia perspiciatis praesentium aliquid molestias, labore architecto sit officiis possimus, odio delectus mollitia iste accusantium iure! Placeat, impedit!
        </Button>
      </Spin>
      <Pagination
      showSizeChanger
      defaultCurrent={3}
      total={500}
      />
    </div>
  );
}

export default App;
