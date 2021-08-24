import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

import * as Styled from './styles';

interface Props {
  video: string;
}

const VimeoPlayer: React.FC<Props> = ({ video }) => {
  return (
    <Styled.VimeoPlayer>
      <Vimeo video={video} dnt={false} responsive={true} />
    </Styled.VimeoPlayer>
  );
};

export default VimeoPlayer;
