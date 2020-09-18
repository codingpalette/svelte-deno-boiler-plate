<script lang="ts">
    import { register, login, check } from '../api/auth';
    import client from '../api/client';
    let name = '';
    let email = '';
    let password = '';
    let accessToken = '';
    const handleSubmit = async () => {
        try {
            const res = await register({ name, email, password })
            console.log(res)
        } catch (e) {
            console.error(e)
        }
    }
    const loginSubmit = async () => {
        try {

            const res = await login({email, password})
            console.log(res)
            localStorage.setItem('jwt_key', res.data.jwt)
        } catch (e) {
            console.error(e)
        }
    }
    const onClickMe = async () => {
        try {
            const key = localStorage.getItem('jwt_key');
            if (key) {
                client.defaults.headers.common['Authorization'] = key;
            } else {
                client.defaults.headers.common['Authorization'] = '';
            }
            const res = await check()
            console.log(res)
        } catch (e) {
            console.error(e)
        }
    }

    const onClickLogOut = () => {
        localStorage.removeItem('jwt_key');
    }
</script>

<div>
    <h2>회원가입</h2>
    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="이름" bind:value={name}>
        <input type="text" placeholder="이메일" bind:value={email}>
        <input type="password" placeholder="비밀번호" bind:value={password}>
        <button type="submit">가입</button>
    </form>
    <hr />
    <h2>로그인</h2>
    <form on:submit|preventDefault={loginSubmit}>
        <input type="text" placeholder="이메일" bind:value={email}>
        <input type="password" placeholder="비밀번호" bind:value={password}>
        <button type="submit">로그인</button>
    </form>

    <h2>토큰</h2>
    <button type="button" on:click={onClickMe}>로그인 유지</button>

    <h2>로그아웃</h2>
    <button type="button" on:click={onClickLogOut}>로그아웃</button>
</div>
