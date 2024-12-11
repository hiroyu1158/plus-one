    
import './CSS.css'

const AddTransaction = () => {
    return (
        <div>なぜ表示されないのか
            <div className='inputForm'>これが入力欄になる</div>
            選択：<select>
            <option value="jan">1月</option>
            <option value="feb">2月</option>
            </select>
            金額：<input type="input"/>円
        </div>
    );
};
export default AddTransaction; 