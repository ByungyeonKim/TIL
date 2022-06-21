import { Header } from 'semantic-ui-react';
import Gnb from './gnb';

export default function Top() {
  return (
    <div>
      <Header as='h1' style={{ paddingTop: 14 }}>
        Vintz
      </Header>
      <Gnb />
    </div>
  );
}
