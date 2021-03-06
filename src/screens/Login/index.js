import React, { Component } from 'react';
import { Button, Form, Input, Spin } from 'antd';
import './styles.css';

export default class Login extends Component {

    state = {
        userName: '',
    }

    onChangeInputUserName = (e) => {
        this.setState({ userName: e.target.value });
    }

    onClickAccountAcess = () => {
        const { userName } = this.state;
        this.props.onClickAccountAcess(userName);
    }
    render() {
        const { isLoadingLogin } = this.props;
        return (
            <div className="container">
                <div className="form_login">
                    <div className="logo">MyHub</div>
                    {
                        isLoadingLogin
                            ? <Spin size="large" tip="Carregando..." />
                            : (
                                <Form className="login-form">
                                    <Form.Item>
                                        <span>Usuário do GitHub:</span>
                                        <Input
                                            onChange={this.onChangeInputUserName}
                                            size="large"
                                            placeholder="Digite o seu usuário do GitHub"
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button onClick={this.onClickAccountAcess} type="primary" className="login-form-button" block>
                                            Acessar
                                    </Button>
                                    </Form.Item>
                                </Form>
                            )
                    }
                </div>
            </div>
        )

    };
}

