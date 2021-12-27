import * as React from 'react';

interface Props {
  name: string;
}

const HelloUser = ({ username }: { username: string }): JSX.Element => {
  return (
    <div data-testid='hello-user'>
      <h1>Hello {username}</h1>
    </div>
  );
};

export default HelloUser;
