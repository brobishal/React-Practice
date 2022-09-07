import { createHashHistory as createHistory} from 'history';

//a singleton histoyr object
const history = createHistory({
    hashType:'slash',
});

export default history;
