/**
 * The type definition for Leader.
 */
export interface ILeader {
    /**
     * The unique identification of a Leader
     */
    uuid: string

    /**
     * The name of the leader
     */
    name: string

    /**
     * The avatar of the leader
     */
    avatar: string

    /**
     * The name of the team.
     */
    team_name: string

    /**
     * The expected target.
     */
    expected_target: number

    /**
     * The achieved target
     */
    achieved_target: number

    /**
     * The created at date
     */
    created_at: string

    /**
     * The updated at date.
     */
    updated_at?: string

    /**
     * The target percentage.
     */
    target_percentage: number
}
