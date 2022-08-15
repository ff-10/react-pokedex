import { Component } from "react";
import style from './style.module.css';

export default class Pokecard extends Component {
    render() {
        return (
            <div className={`${style.poke_card}`}>
                <h3 className={style.poke_name}>{this.props.name}</h3>
                <div className={style.poke_image}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} />
                </div>
                <div className={style.poke_info_area}>
                    <span>Type: {this.props.type}</span>
                    <span>EXP: {this.props.base_experience}</span>
                </div>
            </div>
        );
    }
}
