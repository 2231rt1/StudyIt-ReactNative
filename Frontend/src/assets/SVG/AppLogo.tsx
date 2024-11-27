import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface AppLogoProps {
  width: number;
  height: number;
  resizeMode?: 'contain' | 'cover' | 'stretch'; // добавьте это
}

const AppLogo: React.FC<AppLogoProps> = props => (
  <Svg
    viewBox='0 0 314 258'
    fill='none'
    {...props} // Spread operator to include width and height
  >
    <G filter='url(#a)' opacity={0.85}>
      <Path
        fill='url(#b)'
        d='M240.33 188.525c0 30.179-24.464 54.644-54.642 54.644-30.179 0-54.643-24.465-54.643-54.644 0-30.18 24.464-54.645 54.643-54.645 30.178 0 54.642 24.465 54.642 54.645Z'
      />
      <Path
        fill='url(#c)'
        d='M262.188 110.656c0 37.724-30.581 68.306-68.304 68.306s-68.304-30.582-68.304-68.306c0-37.725 30.581-68.306 68.304-68.306s68.304 30.581 68.304 68.306Z'
      />
      <Path
        fill='url(#d)'
        d='M185.688 120.902c0 43.383-35.168 78.552-78.55 78.552-43.381 0-78.549-35.169-78.549-78.552 0-43.383 35.168-78.552 78.549-78.552 43.382 0 78.55 35.169 78.55 78.552Z'
      />
      <Path
        fill='url(#e)'
        d='M241.696 147.541c0 56.587-45.87 102.459-102.455 102.459S36.786 204.128 36.786 147.541 82.656 45.082 139.24 45.082s102.455 45.872 102.455 102.459Z'
      />
      <Path
        fill='url(#f)'
        d='M310 138.661c0 9.431-7.645 17.077-17.076 17.077-9.431 0-17.076-7.646-17.076-17.077 0-9.431 7.645-17.076 17.076-17.076 9.431 0 17.076 7.645 17.076 17.076Z'
      />
      <Path
        fill='url(#g)'
        d='M176.125 17.076c0 9.432-7.645 17.077-17.076 17.077-9.431 0-17.076-7.645-17.076-17.076C141.973 7.644 149.618 0 159.049 0c9.431 0 17.076 7.645 17.076 17.076Z'
      />
      <Path
        fill='url(#h)'
        d='M49.08 232.923c0 5.659-4.587 10.246-10.245 10.246-5.659 0-10.246-4.587-10.246-10.246 0-5.658 4.587-10.245 10.246-10.245 5.658 0 10.245 4.587 10.245 10.245Z'
      />
      <Path
        fill='url(#i)'
        d='M17.66 147.541a6.831 6.831 0 1 1-13.661 0 6.831 6.831 0 0 1 13.662 0Z'
      />
      <Path
        fill='url(#j)'
        d='M269.018 168.033a6.83 6.83 0 0 1-13.661 0 6.83 6.83 0 1 1 13.661 0Z'
      />
    </G>
    <Defs>
      <LinearGradient
        id='b'
        x1={157}
        x2={157}
        y1={0}
        y2={250}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#00FF1E' />
        <Stop offset={1} stopColor='#00C337' />
      </LinearGradient>
      <LinearGradient
        id='c'
        x1={157}
        x2={157}
        y1={0}
        y2={250}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#174DFF' />
        <Stop offset={1} stopColor='#002499' />
      </LinearGradient>
      <LinearGradient
        id='d'
        x1={157}
        x2={157}
        y1={0}
        y2={250}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#D940FF' />
        <Stop offset={1} stopColor='#4D0060' />
      </LinearGradient>
      <LinearGradient
        id='e'
        x1={157}
        x2={157}
        y1={0}
        y2={250}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#0078D5' />
        <Stop offset={1} stopColor='#0090FE' />
      </LinearGradient>
      <LinearGradient
        id='f'
        x1={157}
        x2={157}
        y1={0}
        y2={250}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#465CFF' />
        <Stop offset={1} stopColor='#2A3799' />
      </LinearGradient>
      <LinearGradient
        id='g'
        x1={157}
        x2={157}
        y1={0}
        y2={250}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#35FFA4' />
        <Stop offset={1} stopColor='#005909' />
      </LinearGradient>
      <LinearGradient
        id='h'
        x1={157}
        x2={157}
        y1={0}
        y2={250}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#37CDFF' />
        <Stop offset={1} stopColor='#009CD0' />
      </LinearGradient>
      <LinearGradient
        id='i'
        x1={157}
        x2={157}
        y1={0}
        y2={250}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#C30FFF' />
        <Stop offset={1} stopColor='#750999' />
      </LinearGradient>
      <LinearGradient
        id='j'
        x1={157}
        x2={157}
        y1={0}
        y2={250}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#35FF3F' />
        <Stop offset={1} stopColor='#15D200' />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default AppLogo;
