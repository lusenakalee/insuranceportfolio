import { v4 as uuidv4 } from 'uuid';

// Import images
import AmazonImage from '../public/images/brands/amazon_gray.png';
import SonyImage from '../public/images/brands/sony_gray.png';
import AdidasImage from '../public/images/brands/adidas_gray.png';
import FilaImage from '../public/images/brands/fila_gray.png';
import NBImage from '../public/images/brands/nb_gray.png';
import SamsungImage from '../public/images/brands/samsung_gray.png';
import CanonImage from '../public/images/brands/canon_gray.png';
import PumaImage from '../public/images/brands/puma_gray.png';
import AkiImage from '../public/images/brands/aki_gray.png';
import BritamImage from '../public/images/brands/britam_gray.png';

export const clientsHeading = 'Some of the brands I worked with';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'AKI',
		img: AkiImage,
	},
	{
		id: uuidv4(),
		title: 'BRITAM',
		img: BritamImage,
	},

];
