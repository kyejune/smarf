import React, {Component} from 'react';
import { a } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className="page-login">

                <form>

                    <img className="logo"
                         src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMTEgOTggMjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAxMSA5OCAyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzI1MjUyNTt9DQo8L3N0eWxlPg0KPGcgaWQ9IlhNTElEXzgwXyI+DQoJPGNpcmNsZSBpZD0iWE1MSURfOTBfIiBjbGFzcz0ic3QwIiBjeD0iNC4zIiBjeT0iMTQuMiIgcj0iMS44Ii8+DQoJPGNpcmNsZSBpZD0iWE1MSURfODlfIiBjbGFzcz0ic3QwIiBjeD0iMTEuMiIgY3k9IjE0LjIiIHI9IjEuOCIvPg0KCTxjaXJjbGUgaWQ9IlhNTElEXzg4XyIgY2xhc3M9InN0MCIgY3g9IjE4LjIiIGN5PSIxNC4yIiByPSIxLjgiLz4NCgk8Y2lyY2xlIGlkPSJYTUxJRF84N18iIGNsYXNzPSJzdDAiIGN4PSI0LjMiIGN5PSIyMS4xIiByPSIxLjgiLz4NCgk8Y2lyY2xlIGlkPSJYTUxJRF84Nl8iIGNsYXNzPSJzdDAiIGN4PSIxMS4yIiBjeT0iMjEuMSIgcj0iMS44Ii8+DQoJPGNpcmNsZSBpZD0iWE1MSURfODVfIiBjbGFzcz0ic3QwIiBjeD0iMTguMiIgY3k9IjIxLjEiIHI9IjAuOCIvPg0KCTxjaXJjbGUgaWQ9IlhNTElEXzg0XyIgY2xhc3M9InN0MCIgY3g9IjE4LjIiIGN5PSIyOC4xIiByPSIwLjgiLz4NCgk8Y2lyY2xlIGlkPSJYTUxJRF84M18iIGNsYXNzPSJzdDAiIGN4PSIxMS4yIiBjeT0iMjguMSIgcj0iMC44Ii8+DQoJPGNpcmNsZSBpZD0iWE1MSURfODJfIiBjbGFzcz0ic3QwIiBjeD0iNC4zIiBjeT0iMjguMSIgcj0iMS44Ii8+DQo8L2c+DQo8ZyBpZD0iWE1MSURfODFfIj4NCgk8cGF0aCBpZD0iWE1MSURfOTFfIiBjbGFzcz0ic3QwIiBkPSJNMzgsMTYuMmgtNi4zdjMuNWg1LjR2MS41aC01LjR2NkgzMFYxNC44aDhWMTYuMnoiLz4NCgk8cGF0aCBpZD0iWE1MSURfOTNfIiBjbGFzcz0ic3QwIiBkPSJNNDkuMSwyNy4yaC0xLjhsLTEuMi0zLjVoLTUuNGwtMS4yLDMuNWgtMS43bDQuNS0xMi41aDIuMkw0OS4xLDI3LjJ6IE00NS42LDIyLjNsLTIuMi02LjENCgkJbC0yLjIsNi4xSDQ1LjZ6Ii8+DQoJPHBhdGggaWQ9IlhNTElEXzk2XyIgY2xhc3M9InN0MCIgZD0iTTYxLjQsMjcuMmgtMi4ybC00LjItNWgtMi4zdjVINTFWMTQuOGgzLjVjMC44LDAsMS40LDAsMS45LDAuMWMwLjUsMC4xLDEsMC4zLDEuNCwwLjUNCgkJYzAuNSwwLjMsMC44LDAuNiwxLjEsMS4xYzAuMywwLjQsMC40LDEsMC40LDEuNmMwLDAuOS0wLjIsMS43LTAuNywyLjNzLTEuMSwxLjEtMS45LDEuNEw2MS40LDI3LjJ6IE01Ny42LDE4LjMNCgkJYzAtMC40LTAuMS0wLjctMC4yLTAuOWMtMC4yLTAuNC0wLjQtMC42LTAuNy0wLjhjLTAuMi0wLjItMC41LTAuMy0wLjktMC4zcy0wLjctMC4xLTEuMi0wLjFoLTEuOXY0LjdoMS43YzAuNSwwLDEsMCwxLjQtMC4xDQoJCXMwLjctMC4zLDEtMC41czAuNC0wLjUsMC42LTAuOEM1Ny41LDE5LjEsNTcuNiwxOC43LDU3LjYsMTguM3oiLz4NCgk8cGF0aCBpZD0iWE1MSURfMTY4XyIgY2xhc3M9InN0MCIgZD0iTTcyLjUsMTYuMmMwLjUsMC42LDAuOSwxLjIsMS4yLDIuMWMwLjMsMC45LDAuNCwxLjcsMC40LDIuN3MtMC4xLDEuOS0wLjQsMi44DQoJCWMtMC4zLDAuOC0wLjcsMS41LTEuMiwyYy0wLjUsMC42LTEuMSwxLTEuOCwxLjNjLTAuNywwLjMtMS41LDAuNC0yLjQsMC40cy0xLjctMC4xLTIuNC0wLjRjLTAuNy0wLjMtMS4zLTAuNy0xLjgtMS4zDQoJCWMtMC41LTAuNi0wLjktMS4yLTEuMi0yYy0wLjMtMC44LTAuNC0xLjctMC40LTIuOGMwLTEsMC4xLTEuOSwwLjQtMi43YzAuMy0wLjgsMC43LTEuNSwxLjItMi4xYzAuNS0wLjUsMS4xLTEsMS44LTEuMw0KCQljMC43LTAuMywxLjUtMC40LDIuNC0wLjRzMS43LDAuMSwyLjQsMC40QzcxLjQsMTUuMiw3MiwxNS43LDcyLjUsMTYuMnogTTcyLjMsMjFjMC0xLjYtMC40LTIuOS0xLjEtMy43Yy0wLjctMC45LTEuNy0xLjMtMy0xLjMNCgkJcy0yLjMsMC40LTMsMS4zYy0wLjcsMC45LTEuMSwyLjEtMS4xLDMuN3MwLjQsMi45LDEuMSwzLjhjMC43LDAuOSwxLjcsMS4zLDMsMS4zYzEuMiwwLDIuMi0wLjQsMy0xLjNDNzIsMjMuOSw3Mi4zLDIyLjYsNzIuMywyMXoiDQoJCS8+DQoJPHBhdGggaWQ9IlhNTElEXzE3OV8iIGNsYXNzPSJzdDAiIGQ9Ik04NS4zLDE2LjJoLTQuNXYxMWgtMS43di0xMWgtNC41di0xLjRoMTAuNkw4NS4zLDE2LjJMODUuMywxNi4yeiIvPg0KCTxwYXRoIGlkPSJYTUxJRF8xODFfIiBjbGFzcz0ic3QwIiBkPSJNOTYsMjcuMmgtMS44TDkzLDIzLjhoLTUuNGwtMS4yLDMuNWgtMS43bDQuNS0xMi41aDIuMkw5NiwyNy4yeiBNOTIuNSwyMi4zbC0yLjItNi4xDQoJCWwtMi4yLDYuMUg5Mi41eiIvPg0KPC9nPg0KPC9zdmc+DQo="
                         alt="FAROTA"/>

                    <div className="inputs">
                        <input type="text" placeholder="이메일 혹은 휴대폰 번호"/>
                        <input type="password" placeholder="비밀번호"/>
                    </div>

                    <div className="btns container">
                        <a className="btn__empty">회원가입</a>
                        <a className="btn_filled" href="/main">로그인</a>
                    </div>
                </form>

                <div className="links">
                    <a href="#">아이디</a>
                    <span>/</span>
                    <a href="#">비밀번호 찾기</a>
                </div>

                <div className="divider"></div>

                <p className="comment">가입하면 파로타의 이용약관 및<br/>개인정보취급방침에 동의하게 됩니다.</p>

            </div>
        );
    }
}

export default Login;