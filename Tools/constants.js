// export const BgImage='https://media.istockphoto.com/vectors/acrylic-turquoise-blue-painting-abstract-background-watercolor-vector-id1273278565?b=1&k=6&m=1273278565&s=170667a&w=0&h=j80jWxZu6qcNtA86COWMrYe1QUVM1SOdx6leBL20xlQ=';
export const BgImage='https://images.all-free-download.com/images/graphiclarge/abstract_vector_blue_background_graphic_267134.jpg';
export const UserImage='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
export const SativaImage =
  'https://drive.google.com/file/d/1iUjGb9YuM6QvzrhFG9edmb6EdRxeFfCf/preview';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAlignJustify,
  faAngleLeft,
  faBook,
  faBrain,
  faCamera,
  faCoffee,
  faLaptopCode,
  faUserGraduate,
  faUserInjured,
  faCapsules,
  faChartArea,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';

export const Domain = '192.168.24.75/';
export const base_url = 'http://'+Domain;
export const API_Baseurl = base_url + 'api-server/public/';
export var menuList = {
  menu: [
    {lable: 'Matakuliah', icon: faBook, dest: 'MatakuliahPage'},
    {lable: 'Mahasiswa', icon: faUserGraduate, dest: 'MahasiswaPage'},
    {lable: 'Dosen', icon: faUserInjured, dest: 'DosenPage'},
    // {lable: 'KRS', icon: faBook, dest: 'DosenPage'},
    // {lable: 'Nilai', icon: faChartArea, dest: 'DosenPage'},
    {lable: 'Profile', icon: faUserAstronaut, dest: 'AboutPage'},
  ],
};