import {
  Animations, Auth, Cheatsheets, Cssinjs, Extensions, Cms, DataLayer,
  Processing, DataVisualization, Graphic, Interactions, Search,
  Tests, Translations, Utils, Framework, Hosting, Media, Ssg
} from './';
import { Placeholder } from '../';
import { Subcategory } from '../../../shared';

interface CategoryImageProps {
  code: Subcategory;
  style?: any;
}

export const SubcategoryImage = ({ code, style }: CategoryImageProps) => {
  switch (code) {
    case 'js_animations':
    case 'css_animations':
      return <Animations width="20%" style={style} />;
    case 'js_authorization':
      return <Auth width="20%" style={style} />;
    case 'js_css-in-js':
      return <Cssinjs width="20%" style={style} />;
    case 'js_cheatsheets':
    case 'css_cheatsheets':
      return <Cheatsheets width="20%" style={style} />;
    case 'js_data-layer':
      return <DataLayer width="20%" style={style} />;
    case 'js_data-visualization':
      return <DataVisualization width="20%" style={style} />;
    case 'js_graphic':
      return <Graphic width="20%" style={style} />;
    case 'js_interactions':
      return <Interactions width="20%" style={style} />;
    case 'js_search':
      return <Search width="20%" style={style} />;
    case 'js_tests':
      return <Tests width="20%" style={style} />;
    case 'js_frameworks':
    case 'css_frameworks':
      return <Framework width="20%" style={style} />;
    case 'js_extensions':
      return <Extensions width="20%" style={style} />;
    case 'js_translations':
      return <Translations width="20%" style={style} />;
    case 'js_utils':
    case 'css_utils':
      return <Utils width="20%" style={style} />;
    case 'css_processors':
      return <Processing width="20%" style={style} />;
    case 'jam_cms':
      return <Cms width="20%" style={style} />;
    case 'jam_hosting':
      return <Hosting width="20%" style={style} />;
    case 'jam_media':
      return <Media width="20%" style={style} />;
    case 'jam_ssg':
      return <Ssg width="20%" style={style} />;
    default:
      return <Placeholder width="20%" style={style} />;
  }
};
