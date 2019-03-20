import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './Container.css'

class Container extends Component {
    render() {

        return (
            <div className="about">
                <div className="example-header">
                    <div className="example-title">
                        <h1>enter3017sky 作品集</h1>
                        <h3>作品是參與 Lidemy 的 <a href="https://github.com/Lidemy/mentor-program-2nd" target="blank">Mentor Program 2</a> 學習的成果</h3>
                    </div>
                </div>
                <div className="example-row">
                    <Card className="example">
                        <a href="http://forum.enter3017sky.tw/" target="blank">
                            <div className="img_box">
                                <Card.Img variant="top" src='https://raw.githubusercontent.com/enter3017sky/mentor-program-2nd-blog/master/picture/forum-php.gif' />
                            </div>
                        </a>
                        <Card.Body>
                            <Card.Title>Message Board</Card.Title>
                            <Card.Text>
                                PHP + JQuery 的 AJAX 留言板
                                <br />
                                部署在 AWS EC2
                                <br />
                                支援 Markdown 語法
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <a href="https://github.com/enter3017sky/forum-php-ajax">
                                <i className="fab fa-github mr-2"></i>
                                Source Code
                            </a>
                        </Card.Footer>
                    </Card>

                    <Card className="example">
                        <a href="http://enter3017sky.tw/" target="blank">
                            <div className="img_box">
                                <Card.Img variant="top" src='https://raw.githubusercontent.com/enter3017sky/mentor-program-2nd-blog/master/picture/php-blog.gif' />
                            </div>
                        </a>
                        <Card.Body>
                            <Card.Title>PHP Blog</Card.Title>
                            <Card.Text>
                                使用 PHP 製作的 Blog
                                <br />
                                部署在 AWS EC2 
                                <br />
                                支援 Markdown 語法
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <a href="https://github.com/enter3017sky/blog-php-pdo">
                                <i className="fab fa-github mr-2"></i>
                                Source Code
                            </a>
                        </Card.Footer>
                    </Card>
                    <Card className="example">
                        <a href="http://blog.enter3017sky.tw/" target="blank">
                            <div className="img_box">
                                <Card.Img variant="top" src='https://raw.githubusercontent.com/enter3017sky/mentor-program-2nd-blog/master/picture/nodeblog.gif' />
                            </div>
                        </a>
                            <Card.Body>
                            <Card.Title>Node.js Blog</Card.Title>
                            <Card.Text>
                                使用 Node.js, Express, Sequelize
                                <br />
                                部署在 AWS EC2
                                <br />
                                支援 Markdown 語法
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <a href="https://github.com/enter3017sky/blog-node-express">
                                <i className="fab fa-github mr-2"></i>
                                Source Code
                            </a>
                        </Card.Footer>
                    </Card>

                    </div>
                    <div className="example-row">
                    <Card className="example">
                        <a href="https://enter3017sky.github.io/twitch-API-practice/" target="blank">
                            <div className="img_box">
                                <Card.Img variant="top" src="https://raw.githubusercontent.com/enter3017sky/mentor-program-2nd-blog/master/picture/twitch_api.gif" />
                            </div>
                        </a>
                        <Card.Body>
                            <Card.Title>串接 Twtich Api</Card.Title>
                            <Card.Text>
                            使用 Vanilla JS + CSS + HTML
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <a href="https://github.com/enter3017sky/twitch-API-practice">
                                <i className="fab fa-github mr-2"></i>
                                Source Code
                            </a>
                        </Card.Footer>
                    </Card>
                    <Card className="example">
                        <a href="https://enter3017sky.github.io/Css-practice/" target="blank">
                            <div className="img_box">
                                    <Card.Img variant="top" src={require('../../img/form.png')} />
                            </div>
                        </a>
                        <Card.Body>
                            <Card.Title>仿製 Google 表單</Card.Title>
                            <Card.Text>
                            使用 Vanilla JS + CSS + HTML
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <a href="https://enter3017sky.github.io/Css-practice/">
                                <i className="fab fa-github mr-2"></i>
                                Source Code
                            </a>
                        </Card.Footer>
                    </Card>
                    <Card className="example">
                        <a href="https://enter3017sky.github.io/Css-practice/" target="blank">
                            <div className="img_box">
                                <Card.Img variant="top" src={require('../../img/form.png')} />
                            </div>
                        </a>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <a href="https://github.com/enter3017sky/Css-practice">
                                <i className="fab fa-github mr-2"></i>
                                Source Code
                            </a>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Container