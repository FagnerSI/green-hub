import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { MAPBOX_TOKEN, BrazilCoordenadas } from '../../common/constants';
import { Button, Spin } from 'antd';
import { Perfil, Card, Pin } from '../../components';

import './styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: "300px",
                height: "250px",
                latitude: BrazilCoordenadas.latitude,
                longitude: BrazilCoordenadas.longitude,
                zoom: 2
            }
        };
    }

    render() {
        const { userInfos, logout, isLoadingRepos, reposStarred, location } = this.props;
        return (
            <div className="home_container">
                <div className="container_left">
                    <Perfil user={userInfos} />
                    {
                        location && location.lat
                        && (
                            <MapGL
                                {...this.state.viewport}
                                mapStyle="mapbox://styles/mapbox/dark-v9"
                                onViewportChange={viewport => this.setState({ viewport })}
                                mapboxApiAccessToken={MAPBOX_TOKEN}
                            >
                                <Marker
                                    key={userInfos.id}
                                    latitude={location.lat}
                                    longitude={location.lng}
                                    offsetLeft={-20}
                                    offsetTop={-10}
                                >
                                    <Pin avatar={userInfos.avatar_url} />
                                </Marker>

                            </MapGL>
                        )
                    }
                    <div className="logout">
                        <Button type="link" onClick={logout} icon="logout" >Sair</Button>
                    </div>
                </div>
                {
                    isLoadingRepos
                        ? (
                            <div className="container_loading">
                                <Spin size="large" tip="Carregando repositórios..." />
                            </div>
                        )
                        : (
                            <div className="container_right">
                                <div className="title">REPOSITÓRIOS QUE VOCÊ DEU ESTRELA</div>
                                <div className="container_list">
                                    {
                                        reposStarred && reposStarred.length
                                            ? reposStarred.map(repo => <Card item={repo} icon="⭐" key={repo.id} />)
                                            : <span>Nenhum repositórios foi encontrado</span>
                                    }
                                </div>
                            </div>
                        )
                }
            </div>

        )
    }

};

export default Home;
