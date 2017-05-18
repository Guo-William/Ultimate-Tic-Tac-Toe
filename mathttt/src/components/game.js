import React from 'react';
import { SectorContainer } from '../containers/SectorContainer.js';
export class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-sector">
                    <SectorContainer/>
                </div>
            </div>
        );
    }
}
