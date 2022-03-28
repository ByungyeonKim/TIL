type Theme = 'Light' | 'Dark' | 'Gen-Z';

function exhaustiveCheck(param: never) {}

export default function getTheme(theme: Theme) {
  switch (theme) {
    case 'Light':
      console.log('해당 테마는 라이트 테마입니다.');
      break;
    case 'Dark':
      console.log('해당 테마는 다크 테마입니다.');
      break;
    case 'Gen-Z':
      console.log('해당 테마는 Gen-Z 테마입니다.');
      break;
    default:
      exhaustiveCheck(theme);
  }
}

getTheme('Gen-Z');
