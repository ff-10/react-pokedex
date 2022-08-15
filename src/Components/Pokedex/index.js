import { Component } from "react";
import style from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pokemons from '../../Constants/pokemon';
import Pokecard from '../Pokecard';
import team1Logo from './images/team1_logo.png';
import team2Logo from './images/team2_logo.png';

class Pokedex extends Component {

    constructor() {
        super();

        this.state = {
            pokemons,
            team1: [],
            team1Score: 0,
            team2: [],
            team2Score: 0,
            winner: null
        }

        this.battle = this.battle.bind(this);
    }

    battle() {
        let tm1 = [];
        let tm2 = [];
        this.state.team1.length = 0;
        this.state.team2.length = 0;

        for (let i = 0; i < 4; i++) {
            tm1.push(this.state.pokemons[Math.floor(Math.random() * this.state.pokemons.length)]);
            tm2.push(this.state.pokemons[Math.floor(Math.random() * this.state.pokemons.length)]);
        }

        let team1Score = tm1.reduce((sum, pokemon) => sum + pokemon.base_experience, 0);
        let team2Score = tm2.reduce((sum, pokemon) => sum + pokemon.base_experience, 0);

        let winner;

        if (team1Score > team2Score) {
            winner = 'Team 1 is WINNER!';
        } else if (team1Score === team2Score) {
            winner = 'Round Draw';
        }
        else {
            winner = 'Team 2 is WINNER!';
        }
        this.setState({ team1: [...tm1], team2: [...tm2], winner, team1Score, team2Score });
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.gameBoard}>
                    <h3 className={`text-secondary ${style.title} my-3`}>Pokedex</h3>

                    <div className={style.cards_area}>
                        <div className={`${style.team_area}`}>
                            {this.state.team1.length === 0 ? null : this.state.team1.map((obj, index) => <Pokecard key={`pokemon-card-${index}`} {...obj} />)}

                            <img src={team1Logo} style={{ position: 'absolute' }} width={this.state.winner === null ? 0 : 50} alt="" />
                        </div>

                        <div className={`${style.vs_text}`}>
                            <img src="https://w7.pngwing.com/pngs/794/743/png-transparent-vs-showdown-vs-calligraphy-pk-duel-game-vs.png" width={this.state.winner === null ? 0 : 100} alt="" />
                        </div>

                        <div className={`${style.team_area}`}>
                            {this.state.team2.length === 0 ? null : this.state.team2.map((obj, index) => <Pokecard key={`pokemon-card-${index}`} {...obj} />)}

                            <img src={team2Logo} style={{ position: 'absolute' }} width={this.state.winner === null ? 0 : 50} alt="" />
                        </div>

                    </div>

                    <div className="d-flex justify-content-center">
                        <button className={`${style.battle_btn} btn btn-danger`} onClick={this.battle}>Battle!</button>
                    </div>
                </div>

                <div className={this.state.winner === null ? style.hide : style.winner} >
                    <p className={style.winner_text}>
                        {this.state.winner}
                    </p>

                    <div className="d-flex justify-content-between align-items-center w-100">
                        <span>Team 1: {this.state.team1Score}</span>
                        <span>Team 2: {this.state.team2Score}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokedex;