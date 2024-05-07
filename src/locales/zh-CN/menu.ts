import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
    "cancel": "取消",
    "continue": "继续",
    "dailyRun": "每日挑战 (Beta)",
    "loadGame": "加载游戏",
    "newGame": "新游戏",
    "selectGameMode": "选择一个游戏模式",
    "logInOrCreateAccount": "登录或创建账户以开始游戏。无需邮箱！",
    "username": "用户名",
    "password": "密码",
    "login": "登录",
    "register": "注册",
    "emptyUsername": "用户名不能为空",
    "invalidLoginUsername": "提供的用户名无效",
    "invalidRegisterUsername": "用户名只能包含字母、数字或下划线",
    "invalidLoginPassword": "提供的密码无效",
    "invalidRegisterPassword": "密码必须至少包含 6 个字符",
    "usernameAlreadyUsed": "提供的用户名已被使用",
    "accountNonExistent": "提供的用户不存在",
    "unmatchingPassword": "提供的密码不匹配",
    "passwordNotMatchingConfirmPassword": "密码必须与确认密码一致",
    "confirmPassword": "确认密码",
    "registrationAgeWarning": "注册即表示您确认您已年满 13 岁。",
    "backToLogin": "返回登录",
    "failedToLoadSaveData": "读取存档数据失败。请重新加载页面。\n如果问题仍然存在，请联系管理员。",
    "sessionSuccess": "会话加载成功。",
    "failedToLoadSession": "无法加载您的会话数据。它可能已损坏。",
    "boyOrGirl": "你是男孩还是女孩？",
    "boy": "男孩",
    "girl": "女孩",
    "dailyRankings": "每日排名",
    "weeklyRankings": "每周排名",
    "noRankings": "无排名",
    "loading": "加载中…",
    "playersOnline": "在线玩家",
    "empty": "空",
    "yes": "是",
    "no": "否",
} as const;