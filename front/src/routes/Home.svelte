<script lang="ts">
    import { register, login } from '../api/auth';
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
        } catch (e) {
            console.error(e)
        }
    }
    const onClickMe = async () => {
        try {
        } catch (e) {
            console.error(e)
        }
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

    <h3>토큰</h3>
    <input type="text" bind:value={accessToken}>
    <button type="button" on:click={onClickMe}>로그인 유지</button>
</div>
