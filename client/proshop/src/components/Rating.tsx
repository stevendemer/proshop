import { AiFillStar } from 'react-icons/ai';
import Box from '@mui/material/Box';
import { FaStarHalfAlt, FaStar } from 'react-icons/fa';

interface IProps {
    value: number;
    text: string;
};

const Rating = ({ value, text }: IProps) => {
    return (
        <>
            <span>
                <i>
                    {value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaStar />}
                </i>
            </span>
            <span>
                <i>
                    {value >= 2 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaStar />}
                </i>
            </span>
            <span>
                <i>
                    {value >= 3 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaStar />}
                </i>
            </span>
            <span>
                <i>
                    {value >= 4 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaStar />}
                </i>
            </span>
            <span>
                <i>
                    {value >= 5 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaStar />}
                </i>
            </span>
            <span>
                {text && <h4>{text}</h4>}
            </span>
        </>
    );
}

export default Rating;