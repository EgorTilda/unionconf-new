import autoprefixer from 'autoprefixer';
import sortmedia from 'sort-media-queries';

export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not dead'
      ],
      grid: 'autoplace',
      flexbox: 'no-2009'
    }),
    sortmedia
  ]
};